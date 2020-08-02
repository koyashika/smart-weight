class WeightsController < ApplicationController
  def index
    @data= Weight.all
    
  end
end
