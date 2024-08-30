export default function listToTree(list, key = 'id') {
  let trees = {};
  let roots = {};
	list.sort((a, b) => {
		const date1 = new Date(a.commented_at);
		const date2 = new Date(b.commented_at);

		return date1 - date2;
	})
  for (const item of list) {
    if (!trees[item[key]]) {
      trees[item[key]] = item;
      trees[item[key]].children = [];
      roots[item[key]] = trees[item[key]];
    } else {
      trees[item[key]] = Object.assign(trees[item[key]], item);
    }
    if (item.parent_id) {
      if (!trees[item.parent_id]) trees[item.parent_id] = { children: [] };
      trees[item.parent_id].children.push(trees[item[key]]);
      if (roots[item[key]]) delete roots[item[key]];
    }
  }
  return Object.values(roots);
};


