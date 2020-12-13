class RecordsController < ApplicationController
  before_action :move_to_index, except: [:index, :show]

  
  def index
    @record = Record.new
    @records = Record.includes(:user).order("created_at DESC")
  end

  def show
    user = User.find(params[:id])
    @name = user.name
    @records = user.records
    @records = Record.includes(:user).order("created_at DESC")
  end

  def create
    @record = Record.new(record_params)
    if @record.save
      redirect_to records_path, notice: 'テキストが送信されました'
    else
      flash.now[:alert] = 'テキストを入力してください。'
      render :index
    end
  end

  def destroy
    record = Record.find(params[:id])
    record.destroy
    redirect_to records_path, notice: '削除しました'
  end

  def edit
    @record = Record.find(params[:id])
  end

  def update
    record = Record.find(params[:id])
    record.update(record_params)
    redirect_to records_path, notice: '編集しました'
  end
  
  private

  def record_params
    params.require(:record).permit(:text, :image).merge(user_id: current_user.id)
  end

  def move_to_index
    unless user_signed_in?
      redirect_to action: :index
    end
  end
end