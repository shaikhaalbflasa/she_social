const { json } = require('express')
const User = require('../models/Confirmed')

async function confirmed_create_post(req,res) {
    try {
    } catch (err) {
        res.json(err)
    }
}

async function confirmed_details_get(req,res) {
    try {
    } catch (err) {
        res.json(err)
    }
}

async function confirmed_update_put(req,res) {
    try {
    } catch (err) {
        res.json(err)
    }
}

async function confirmed_delete(req,res) {
    try {
    } catch (err) {
        res.json(err)
    }
}

async function confirm_search_get(req,res) {
    try {
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    confirmed_create_post,
    confirmed_details_get,
    confirmed_update_put,
    confirmed_delete,
    confirm_search_get,
}
