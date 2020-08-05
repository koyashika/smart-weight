Rails.application.routes.draw do
  devise_for :users
  root "weights#index"
  resources :users, only: [:index, :edit, :update]
  resources :weights, only: [:index,:new, :create]
  post '/' => 'weights#create'
end
