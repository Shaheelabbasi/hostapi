const product = require("../models/productmodel");

const getAllProducts = async (req, res) => {
  try {
    const { name, featured, company, sort, select } = req.query;

    const queryObject = {};

    if (name) {
      queryObject.name = name;
    }
    if (company) {
      queryObject.company = company;
    }
    if (featured) {
      queryObject.featured = featured;
    }

    let data = product.find(queryObject);
    if (sort) {
      let sortFix = sort.replace(",", " ");
      data = data.sort(sortFix);
    }
    if (select) {
      let selfix = select.split(",").join(" ");
      data = data.select(selfix);
    }
    let page=Number(req.query.page)|| 1
    let limit=Number(req.query.limit) || 2
    let skip=(page-1)*limit
    
    data=data.skip(skip).limit(limit)
    

    const result = await data;

    res.json({ result,length:result.length });
  } catch (error) {
    console.log(error);
  }
};
const getAllProductsTesting = async (req, res) => {
  try {
    const { company, name, featured, sort, select } = req.query;

    //  console.log("the sorting data is ",sort)

    const queryObject = {};

    let data = product.find(queryObject);

    if (select) {
      // let selfix=select.replace(","," ")
      let selfix = select.split(",").join(" ");

      data = data.select(selfix);
    }

    const result = await data;
    res.json({ result,nbHits:result.length });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllProducts, getAllProductsTesting };
