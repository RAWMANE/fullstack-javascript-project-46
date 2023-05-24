import _ from 'lodash';

const stringify = (val) => {
  if (_.isObject(val)) return '[complex value]';
  if (_.isString(val)) return `'${val}'`;
  return val;
};

const mapping = {
  root: (node, ancestry, iter) => node.children.flatMap((child) => iter(child)).join('\n'),
  nested: (node, ancestry, iter) => node.children.flatMap((child) => iter(child, ancestry)).join('\n'),
  added: (node, ancestry) => `Property '${ancestry}' was added with value: ${stringify(node.value)}`,
  changed: (node, ancestry) => `Property '${ancestry}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`,
  removed: (node, ancestry) => `Property '${ancestry}' was removed`,
  unchanged: () => [],
};

const buildPlainForm = (diffTree) => {
  const iter = (node, ancestry = '') => {
    const newAncestry = ancestry ? [ancestry, node.name].join('.') : node.name;

    return mapping[node.type](node, newAncestry, iter);
  };

  return iter(diffTree);
};

export default buildPlainForm;