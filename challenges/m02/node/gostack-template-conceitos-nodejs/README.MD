# .env helper
module.exports={
    PORT = xxxx
}

# Functional Requirements
- [x] must ADD repositories
- [x] must LIST repositories
- [x] must UPDATE repositories
- [x] must DELETE repositories
- [x] User must to be able to "like" a repository


# Routes
- **POST /repositories ::** request.body = {"title": "", "url": "", "techs":""}
  - "url" parameter needs to be the link to a github repo
  - "likes" parameter will **allways** start with 0
- **GET /repositories ::** list all stored repositories
- **PUT /repositories/:id ::** updates **only** title, url and techs with the specified id
- **DELETE /repositories/:id ::** deletes a repo that has the specified id
- **POST /repositories/:id/likes ::** increments the specified repository likes by 1