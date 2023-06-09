const Admin = require("../schemas/adminSchema");
const Editor = require("../schemas/editorSchema");
const Article = require("../schemas/articleSchema");
const Message = require("../schemas/messageSchema");
const Magazine = require("../schemas/magazineSchema");
const Placement = require("../schemas/placementSchema");
const Event = require("../schemas/eventSchema");
const Publication = require("../schemas/publicationSchema");

exports.getAdmin = (request, response) => {
  Admin.findOne({ email: request.body.email })
    .then((res) => {
      return response.status(200).json({ value: res });
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.getEditor = (request, response) => {
  Editor.findOne({ email: request.body.email })
    .then((res) => {
      return response.status(200).json({ value: res });
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.getArticles = (request, response) => {
  Article.find()
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.addArticle = (request, response) => {
  const article = request.body;

  const newArticle = new Article(article);
  newArticle
    .save()
    .then((res) => {
      console.log("data submitted");
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.editArticle = (request, response) => {
  const articleContent = request.body;
  Article.updateOne(
    { _id: request.params.id },
    {
      $set: {
        title: articleContent.title,
        article: articleContent.content,
      },
    }
  )
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.editArticleApproval = (request, response) => {
  Article.updateOne(
    { _id: request.params.id },
    {
      $set: {
        approved: true,
      },
    }
  )
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.addAdmin = (request, response) => {
  const admin = request.body;

  const newAdmin = new Admin(admin);
  newAdmin
    .save()
    .then((res) => {
      console.log("data submitted");
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.addEditor = (request, response) => {
  const editor = request.body;

  const newEditor = new Editor(editor);
  newEditor
    .save()
    .then((res) => {
      console.log("data submitted");
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.getMessage = (request, response) => {
  Message.findOne({ designation: request.body.designation })
    .then((res) => {
      return response.status(200).json({ value: res });
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.getMessages = (request, response) => {
  Message.find()
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.addMessage = (request, response) => {
  const message = request.body;

  const messagedetails = new Message(message);
  messagedetails
    .save()
    .then((res) => {
      console.log("data submitted");
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.editMessage = (request, response) => {
  const messageContent = request.body;
  Message.updateOne(
    { _id: request.params.id },
    {
      $set: {
        name: messageContent.name,
        designation: messageContent.designation,
        message: messageContent.message,
      },
    }
  )
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.deleteMessage = (request, response) => {
  Message.deleteOne({ _id: request.params.id })
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.getEditors = (request, response) => {
  Editor.find()
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.editEditor = (request, response) => {
  const editorContent = request.body;
  Editor.updateOne(
    { _id: request.params.id },
    {
      $set: {
        name: editorContent.name,
        email: editorContent.email,
        designation: editorContent.designation,
        post: editorContent.post,
        program: editorContent.program,
      },
    }
  )
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.getMagazines = (request, response) => {
  Magazine.find()
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.addMagazine = (request, response) => {
  const magazine = request.body;

  const magazinedetails = new Magazine(magazine);
  magazinedetails
    .save()
    .then((res) => {
      console.log("data submitted");
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.editMagazine = (request, response) => {
  Magazine.updateOne(
    { _id: request.params.id },
    {
      $set: {
        approved: true,
      },
    }
  )
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.deleteMagazine = (request, response) => {
  Magazine.deleteOne({ _id: request.params.id })
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.deleteEditor = (request, response) => {
  Editor.deleteOne({ _id: request.params.id })
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.deleteArticle = (request, response) => {
  Article.deleteOne({ _id: request.params.id })
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.getPlacements = (request, response) => {
  Placement.find()
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.addPlacement = (request, response) => {
  const placement = request.body;

  const newPlacement = new Placement(placement);
  newPlacement
    .save()
    .then((res) => {
      console.log("data submitted");
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.deletePlacement = (request, response) => {
  Placement.deleteOne({ _id: request.params.id })
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.getEvents = (request, response) => {
  Event.find()
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.addEvent = (request, response) => {
  const event = request.body;

  const newEvent = new Event(event);
  newEvent
    .save()
    .then((res) => {
      console.log("data submitted");
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.deleteEvent = (request, response) => {
  Event.deleteOne({ _id: request.params.id })
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.editEvent = (request, response) => {
  const eventContent = request.body;
  Event.updateOne(
    { _id: request.params.id },
    {
      $set: {
        title: eventContent.title,
        content: eventContent.content,
      },
    }
  )
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.getPublications = (request, response) => {
  Publication.find()
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.addPublication = (request, response) => {
  const publication = request.body;

  const newPublication = new Publication(publication);
  newPublication
    .save()
    .then((res) => {
      console.log("data submitted");
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.deletePublication = (request, response) => {
  Publication.deleteOne({ _id: request.params.id })
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};

exports.editPublication = (request, response) => {
  const publicationContent = request.body;
  Publication.updateOne(
    { _id: request.params.id },
    {
      $set: {
        title: publicationContent.title,
        authors: publicationContent.authors,
        publicationdate: publicationContent.publicationdate,
        abstract: publicationContent.abstract,
        venue: publicationContent.venue,
        url: publicationContent.url,
      },
    }
  )
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((error) => {
      response.status(404).json({ message: error.message });
    });
};
