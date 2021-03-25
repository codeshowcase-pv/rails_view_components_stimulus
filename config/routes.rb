Rails.application.routes.draw do
  get '/', to: 'main#index'

  resources :post, only: [:create, :destroy]
end
