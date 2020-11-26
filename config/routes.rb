Rails.application.routes.draw do
  devise_for :users
  root "top#index"
  resources :users, only: [:index, :edit, :update]
  resources :weights, only: [:index,:new, :create]
  post '/' => 'weights#create'
  resources :bmi, only: [:index]
  resources :records, only: [:index, :create, :destroy, :edit, :update, :show] do
    post 'add' => 'likes#create'
    delete '/add' => 'likes#destroy'
  end
end
