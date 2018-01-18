var service = {}; // service object

service.get = (req, res) => {
  var name = req.params.name;

  // Look up the template by name and return it.
  res.send("GET template works!");
}

service.update = (req, res) => {
  var id = req.params.id;

  // Look up the template by id then update and return it.
  res.send("UPDATE template works!");
}

service.delete = (req, res) => {
  var id = req.params.id;

  // Look up the template by id then delete it.
  res.send("DELETE template works!");
}

service.create = (req, res) => {

  // Create a new template and return it.
  res.send("CREATE template works!");
}

module.exports = service;