import UNSPSC from '../data/categories.json';

const getTopCategories = (categoryList) => {
    categoryList.sort((a, b) => {
          return b.score - a.score;
      })
    
    return categoryList.slice(0,3)
};

const getCategoryName= (label) => {
    const segment = label.substring(0,2) + '000000';
    const segmentData = UNSPSC.filter((obj) => {
        return obj.id.toString() === segment
    });

    const family = segmentData[0].children.filter((obj) => {
      return obj.id.toString() === label
    })
    return family[0].name
};

export {
    getTopCategories,
    getCategoryName
}