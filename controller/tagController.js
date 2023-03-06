exports.delete = async (req, res) => {
  const slug = req.params.slug;
  await Tag.destroy({
    where: {
      url: slug,
    },
  });
  res.send(slug);
};
exports.update = async (req, res) => {
  const slug = req.params.slug;
  const tagname = req.body.tagname;
  const newslug = slugify(tagname);
  try {
    const tag = await Tag.findOne({
      where: {
        url: slug,
      },
    });
    tag.tagname = tagname;
    tag.url = newslug;
    tag.save();
    res.send(tag);
  } catch (error) {
    console.log(error);
  }
};
exports.create = async (req, res) => {
  const tagname = req.body.tagname;
  try {
    await Tag.create({
      tagname: tagname,
      url: slugify(tagname),
    });
    res.send({ tagname: tagname, slug: slugify(tagname) });
  } catch (error) {
    console.log(error);
  }
};
exports.read = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.send({ tags: tags });
  } catch (error) {
    console.log(error);
  }
};
