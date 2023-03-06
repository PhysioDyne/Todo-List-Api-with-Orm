exports.update = async (req, res) => {
  const slug = req.params.slug;
  const title = req.body.title;
  const description = req.body.description;
  const url = slugify(title);
  const time = req.body.time;
  const tagid = req.body.tagid;
  try {
    const list = await List.findOne({
      where: {
        url: slug,
      },
    });
    const alltags = await Tag.findAll();
    list.title = title;
    list.url = url;
    list.description = description;
    list.time = time;
    if (tagid != null) {
      const tags = await Tag.findAll({
        where: {
          id: {
            [Op.in]: tagid,
          },
        },
      });
      await list.removeTags(alltags);
      await list.addTags(tags);
    } else {
      await list.removeTags(alltags);
    }
    await list.save();
    res.send({ data: "Hello World" });
  } catch (error) {
    console.log(error);
  }
};

exports.delete = async (req, res) => {
  const slug = req.params.slug;
  try {
    await List.destroy({
      where: {
        url: slug,
      },
    });
    res.send(slug);
  } catch (error) {
    console.log(error);
  }
};

async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const time = req.body.time;
  const tagid = req.body.tagid;
  try {
    const tags = await Tag.findAll({
      where: {
        id: {
          [Op.in]: tagid,
        },
      },
    });
    const newlist = await List.create({
      title,
      description,
      url: slugify(title),
      time: time,
    });
    newlist.addTags(tags);
    res.send({ tagid: req.body.tagid });
  } catch (error) {
    console.log(error);
  }
};
exports.create = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const time = req.body.time;
  const tagid = req.body.tagid;
  try {
    const tags = await Tag.findAll({
      where: {
        id: {
          [Op.in]: tagid,
        },
      },
    });
    const newlist = await List.create({
      title,
      description,
      url: slugify(title),
      time: time,
    });
    newlist.addTags(tags);
    res.send({ tagid: req.body.tagid });
  } catch (error) {
    console.log(error);
  }
};

exports.details = async (req, res) => {
  const url = req.params.url;
  const list = await List.findOne({
    include: Tag,
    where: {
      url: url,
    },
  });
  res.send({ list: list });
};

exports.read = async (req, res) => {
  const lists = await List.findAll({ include: Tag });
  res.send({ lists: lists });
};
