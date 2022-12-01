class List < ApplicationRecord
  has_many :contacts, dependent: :destroy
  
  validates :list_name, :desc, presence:true
end
