import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://188.166.123.90/v1")
  .setProject("637774fe15e6df6c4c62"); //  API Endpoint

export const account = new Account(client);

//Database

export const databases = new Databases(client, "637cca709df01b62b387");
