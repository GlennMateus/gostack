# Project Go Barber
This is the API of a project called Go Barber, where the costumer will be able to schedule his/ her in a barbershop with a specific barber.
After this the barber will receive a notification and will be able to accept or reject that appointment.

# Rules
- [x] Costumer needs to be registered: Name, Email, Password
- [x] Costumer's e-mail need to be unique
- [x] There cannot be an existing appointment on the selected date & time choosen by the costumer

## Tools
- Node JS :: runtime environment to execute JavaScript inside a server
- ESLint  :: A tool that auxiliates developers to keep some pattern in their code 
- EditorConfig :: It is used for maintaining coding styles between different text editors like VS Code/ Sublime/ Atom/ etc 
- Prettier :: It's just like ESLint and acts as an assist to keep the code well formated
- Docker :: A container software to automate and assist developers to create an entire infrastructure well prepared to deploy
  their applications

- PostgreSQL :: A relational database to store the users and their schedules
- TypeORM :: It's an ORM for creating migrations between the code and the database
- Insomnia / Postman :: Platforms that assist us to test the built API


# Execution instructions
1. Install docker ::  https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2
2. Create a docker container called gostack_postgres:
   - **Linux OS ::** sudo docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d --restart always
   - **Windows OS ::** docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d --restart always
      - **PS ::** If you are using Windows System it's necessary to check Docker's documentation to get help if needed
        https://docs.docker.com/get-started/

3. **if using yarn ::** run the command yarn in the terminal
   **if using npm  ::** run the command npm install in the terminal


4. **if using yarn ::** run the command yarn typeorm:migrations run
   **if using npm  ::** run the command npm run typeorm:migrations run

5. **if using yarn ::** run the command yarn dev:server
   **if using npm  ::** run the command npm run dev:server
   
# Dependencies
- [ ] Node JS v.12.16.2
- [ ] Docker
- [ ] May the Force be with you


