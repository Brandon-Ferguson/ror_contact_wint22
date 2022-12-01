class List < ApplicationRecord

  validates :list_name, :desc, presence:true
end
