# == Schema Information
#
# Table name: columns
#
#  id          :integer          not null, primary key
#  list_id     :integer          not null
#  title       :string           not null
#  column_type :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ColumnTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
