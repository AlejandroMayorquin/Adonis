'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('title',30).notNullable()
      table.string('body',250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
