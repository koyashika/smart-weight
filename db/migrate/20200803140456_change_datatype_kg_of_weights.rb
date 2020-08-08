class ChangeDatatypeKgOfWeights < ActiveRecord::Migration[6.0]
  def change
    change_column :weights, :kg, :float
  end
end
