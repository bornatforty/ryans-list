const express = require('express')
const router = require('express').Router()
const conn = require('../conn')

router.post('/listings', (req, res, next) => {

	const sql = `
	INSERT INTO listings (name, child_id, description, image)
	VALUES (?, ?, ?, ?)
	`
conn.query(sql, [req.body.name, req.body.child_id, req.body.description, req.body.image], (err, results, fields) => {
	res.json(results)
})
})

router.get('/categories', (req, res, next) => {
	const sql = `
	SELECT child.id, child.category, parent.category as parent_category, child.slug
	FROM categories child
	LEFT JOIN categories parent 
	ON child.parent_id = parent.id`
	conn.query(sql, (error, results, fields) => {
		let mainCat = []

		for (let i = 0; i < results.length; i++) {
			if (results[i].parent_category == null) {
				results[i].sub = []
				mainCat.push(results[i])
			} 
		}
		for (let i = 0; i< results.length; i++) {
			if (results[i].parent_category != null) {
				for (let j = 0; j < mainCat.length; j++) {
					if (mainCat[j].category == results[i].parent_category) {
						mainCat[j].sub.push(results[i])
					}
				}
			}
		}
		res.json(mainCat)
})
})

router.get('/listings/:id', (req, res, next) => {
	const sql = `
	SELECT list.name, list.image, list.child_id, list.slug, list.id
	FROM listings list
	LEFT JOIN categories cat
	ON list.child_id = cat.id
	WHERE list.child_id = cat.id
`
conn.query(sql, (error, results, fields) => {
		let SubCat = []
		let id = req.params.id

		for(let i=0; i< results.length; i++) {
			if(results[i].child_id == id) {
				SubCat.push(results[i])
			}
		}
	 
	res.json(SubCat)
})
})


router.get('/post/:id', (req, res, next) => {
	const sql = `
	SELECT list.name, list.image, list.description, list.id
	FROM listings list
	`
conn.query(sql, (error, results, fields) => {
	let id = req.params.id
	let post = []

	for(let i=0; i< results.length; i++) {
		if(results[i].id == id) {
			post.push(results[i])
		}
	}
	res.json(post)
})
})
router.get('/alllistings/:id', (req, res, next) => {
	const sql = `
	SELECT list.name, list.image, list.parent_id, list.slug, list.id
	FROM listings list
	LEFT JOIN categories cat
	ON list.parent_id = cat.id
	WHERE list.parent_id = cat.id
	`
conn.query(sql, (error, results, fields) => {
	let id= req.params.id
	let allListings = []

	for(let i=0; i< results.length; i++) {
		if(results[i].parent_id == id) {
			allListings.push(results[i])

		}
	}
	res.json(allListings)
})
})

module.exports = router
