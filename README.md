# clinic-vet

A platform for vets and pet owners being able to manage the medical file of the pet.

## Requisites

For the API to work, it is necessary to install `node.js`, `npm`, `postgres`, `sequelize`

# Node.js and npm

```
sudo apt-get update
sudo apt-get install nodejs npm
```

# PostgresSQL

Follow the instructions here: [How To Install and Use PostgreSQL on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04).

After instalation, run the following commands to configre the ROLE

```
sudo -i -u postgres
createuser -- interactive (create the role with name "vet")
createdb clinic-vet
```
To access the database
```
psql -U vet -d clinic-vet -h 127.0.0.1 -W
```

# Sequelize.js
```
npm install --save sequelize
npm install --save pg pg-hstore
```

### Instalation

In the folder `server`, run the following lines

```
npm init
npm install
```

To lunch the server, just do `npm start`
