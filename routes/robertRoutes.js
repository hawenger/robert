// /routes/robertRoutes.js
const mongoose = require('mongoose');
const Project = mongoose.model('projects');
const Mood = mongoose.model('moods');
const User = mongoose.model('users');
const Button = mongoose.model('buttons');

module.exports = (app) => {

  //PROJECTS
  
  app.get(`/api/project`, async (req, res) => {
    let projects = await Project.find();
    return res.status(200).send(projects);
  });

  app.post(`/api/project`, async (req, res) => {
    let project = await Project.create(req.body);
    return res.status(201).send({
      error: false,
      project
    })
  })

  app.put(`/api/project/:id`, async (req, res) => {
    const {id} = req.params;

    let project = await Project.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      project
    })

  });

  app.delete(`/api/project/:id`, async (req, res) => {
    const {id} = req.params;

    let project = await Project.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      project
    });

  });
  //MOODS
  app.get(`/api/mood`, async (req, res) => {
    let moods = await Mood.find();
    return res.status(200).send(moods);
  });

  app.post(`/api/mood`, async (req, res) => {
    let mood = await Mood.create(req.body);
    return res.status(201).send({
      error: false,
      mood
    });
  });

  app.put(`/api/mood/:id`, async (req, res) => {
    const {id} = req.params;

    let mood = await Mood.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      mood
    });

  });

  app.delete(`/api/mood/:id`, async (req, res) => {
    const {id} = req.params;

    let mood = await Mood.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      mood
    });

  });

  //USERS
  app.get(`/api/user`, async (req, res) => {
    let users = await User.find();
    return res.status(200).send(users);
  });

  app.post(`/api/user`, async (req, res) => {
    let user = await User.create(req.body);
    return res.status(201).send({
      error: false,
      user
    });
  });

  app.put(`/api/user/:id`, async (req, res) => {
    const {id} = req.params;

    let user = await User.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      user
    });

  });

  app.delete(`/api/user/:id`, async (req, res) => {
    const {id} = req.params;

    let user = await User.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      user
    });

  });

  //BUTTONS
  app.get(`/api/button`, async (req, res) => {
    let buttons = await Button.find();
    return res.status(200).send(buttons);
  });

  app.post(`/api/button`, async (req, res) => {
    let button = await Button.create(req.body);
    return res.status(201).send({
      error: false,
      button
    });
  });

  app.put(`/api/button/:id`, async (req, res) => {
    const {id} = req.params;

    let button = await Button.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      button
    });

  });

  app.delete(`/api/button/:id`, async (req, res) => {
    const {id} = req.params;

    let button = await Button.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      button
    });

  });
}