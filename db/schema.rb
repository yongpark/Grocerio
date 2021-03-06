# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170118060353) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "columns", force: :cascade do |t|
    t.integer  "list_id",     null: false
    t.string   "title",       null: false
    t.string   "column_type", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "g_items", force: :cascade do |t|
    t.string   "title",                       null: false
    t.integer  "column_id",                   null: false
    t.date     "expire_date"
    t.boolean  "expired",     default: false, null: false
    t.integer  "ord",                         null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["column_id", "ord"], name: "index_g_items_on_column_id_and_ord", using: :btree
  end

  create_table "lists", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
