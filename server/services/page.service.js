var service = {}; // service object

service.get = (req, res) => {
  var name = req.params.name;

  // Look up the page by name and return it.
  res.send("GET page works!");
}

service.update = (req, res) => {
  var id = req.params.id;

  // Look up the page by id then update and return it.
  res.send("UPDATE page works!");
}

service.delete = (req, res) => {
  var id = req.params.id;

  // Look up the page by id then delete it.
  res.send("DELETE page works!");
}

service.create = (req, res) => {

  // Create a new page and return it.
  res.send("CREATE page works!");
}

module.exports = service;