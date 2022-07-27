class Product < ApplicationRecord
  belongs_to :parameter
  belongs_to :image
end
