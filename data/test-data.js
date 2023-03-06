const List = require("../model/listModel");
const Tag = require("../model/tagModel");
const slugify = require("../helpers/slugField");
module.exports = async () => {
  const count = await List.count();
  if (count == 0) {
    const lists = await List.bulkCreate([
      {
        title: "title 1",
        url: slugify("title 1"),
        description: "description1",
        time: 10,
      },
      {
        title: "title 2",
        url: slugify("title 2"),
        description: "description2",
        time: 20,
      },
      {
        title: "title 3",
        url: slugify("title 3"),
        description: "description3",
        time: 30,
      },
    ]);
    const tags = await Tag.bulkCreate([
      {
        tagname: "tag1",
        url: slugify("tag1"),
      },
      {
        tagname: "tag2",
        url: slugify("tag2"),
      },
      {
        tagname: "tag3",
        url: slugify("tag3"),
      },
      {
        tagname: "tag4",
        url: slugify("tag4"),
      },
    ]);
    await lists[0].addTag([tags[0]]);
    await lists[1].addTag([tags[1]]);
    await lists[2].addTag([tags[2]]);
    await lists[0].addTag([tags[1]]);
    await lists[1].addTag([tags[2]]);
    await lists[2].addTag([tags[3]]);
  }
};
