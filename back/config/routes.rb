Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :user do
        root "top#index"
      end

      namespace :admin do
        root"top#index"
      end
    end
  end
end
