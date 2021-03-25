// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

import "controllers"

import axios from "axios";

const token = document.querySelector('[name=csrf-token]').content;

window.axios = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    headers: {
        'X-CSRF-TOKEN': token
    }
});
