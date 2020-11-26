class ChangeDataDecimalToWeights < ActiveRecord::Migration[6.0]
  def change
    change_column :weights, :kg, :numeric
  end
end
