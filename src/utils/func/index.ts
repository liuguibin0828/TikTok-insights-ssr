export type ParentId<T> = {
  id: string | number;
  parentId?: string | number | null;
} & T;

export type TreeData<T> = T & {
  children?: ParentId<T>[];
};

// 转化为tree数组
export function convertToTreeData<T extends { id: string; parentId?: string | null }>(
  list: ParentId<T>[]
) {
  const map = new Map<string, number>();
  const roots: TreeData<T>[] = [];

  const treeList = list.map<TreeData<T>>((treeNode, idx) => {
    map.set(treeNode.id, idx);
    return { ...treeNode };
  });

  treeList.forEach(treeNode => {
    if (treeNode.parentId && Number(treeNode.parentId) !== 0) {
      const parentIdx = map.get(treeNode.parentId);
      if (typeof parentIdx !== 'undefined' && treeList[parentIdx]) {
        if (treeList[parentIdx].children) {
          treeList[parentIdx].children?.push(treeNode);
        } else {
          treeList[parentIdx].children = [treeNode];
        }
      }
    } else {
      roots.push(treeNode);
    }
  });

  return roots;
}