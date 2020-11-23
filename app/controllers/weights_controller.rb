class WeightsController < ApplicationController
  def index
    @weights = Weight.all
  end

  def new
    @weight = Weight.new
  end

  def create
    @weight = Weight.create(weight_params)
    if @weight.save
      redirect_to weights_path, notice: '体重が送信されました'
    else
      redirect_to weights_path, notice: '体重を送信してください'
    end
  end

  private

  def weight_params
    params.permit(:kg).merge(user_id: current_user.id)
  end
end

