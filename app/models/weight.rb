class Weight < ApplicationRecord
  belongs_to :user
  validates :kg, presence: true

end
