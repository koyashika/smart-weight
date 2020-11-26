class Record < ApplicationRecord
  belongs_to :user
  validates :text, presence: true, unless: :image?
  has_many :likes
  has_many :users, through: :likes
  mount_uploader :image, ImageUploader


  def liked_by?(user)
    likes.where(user_id: user.id).exists?
  end
end