var pageService = {}; // service object

pageService.get = (req, res) => {
  var name = req.params.name;

  // Look up the page by name and return it.
  res.send();
}

pageService.update = (req, res) => {
  var id = req.params.id;

  // Look up the page by id then update and return it.
  res.send();
}

pageService.delete = (req, res) => {
  var id = req.params.id;

  // Look up the page by id then delete it.
  res.send();
}

pageService.create = (req, res) => {

  // Create a new page and return it.
  res.send();
}

module.exports = service;