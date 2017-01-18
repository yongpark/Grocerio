# == Schema Information
#
# Table name: g_items
#
#  id          :integer          not null, primary key
#  title       :integer          not null
#  column_id   :integer          not null
#  expire_date :date
#  expired     :boolean          default("false"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class GItem < ApplicationRecord


  belongs_to(
    :column,
    primary_key: :id,
    foreign_key: :column_id,
    class_name: "Column"
  )

  has_one(
    :owner,
    through: :list,
    source: :owner
  )

  has_one(
    :list,
    through: :column,
    source: :list,
  )
end