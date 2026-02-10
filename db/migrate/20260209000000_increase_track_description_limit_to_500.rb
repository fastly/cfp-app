class IncreaseTrackDescriptionLimitTo500 < ActiveRecord::Migration[5.1]
  def up
    change_column :tracks, :description, :string, limit: 500
  end

  def down
    change_column :tracks, :description, :string, limit: 250
  end
end
