class Image < ApplicationRecord
  has_many :products
  has_many :qualifications
end
