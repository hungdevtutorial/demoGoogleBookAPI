export const comp = (a, b) => {
  if (a && b !== undefined) {
    a.toLowerCase().trim() === b.toLowerCase().trim();
  }
};

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

export function findItemData(queryItem, itemList) {
  if (itemList !== undefined || itemList.length > 0) {
    if (queryItem === '') {
      return [];
    }
    var regEscape = escapeRegExp(queryItem);
    const regex = new RegExp(`${regEscape.trim()}`, 'i');
    return itemList.filter(item => item.title.search(regex) >= 0);
  }
}
