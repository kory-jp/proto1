class Api::V1::User::TopController < Api::V1::User::Base
  def index
    render json: user
  end
end
