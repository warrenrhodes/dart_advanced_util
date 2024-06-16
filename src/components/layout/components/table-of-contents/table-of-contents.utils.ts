import type {
  RenderableTreeNode,
  RenderableTreeNodes,
  Tag,
} from '@markdoc/markdoc';

export function collectHeadings(
  node: RenderableTreeNodes,
  sections: RenderableTreeNode[] = []
) {
  if (node) {
    if ((node as Tag).name === 'Heading') {
      const title = (node as Tag).children[0];

      if (typeof title === 'string') {
        sections.push({
          title: title,
          ...(node as Tag).attributes,
        });
      }
    }

    if ((node as Tag).children) {
      for (const child of (node as Tag).children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}
