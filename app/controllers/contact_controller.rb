class ContactController < ApplicationController
  def tel
    @department = Contact.find_by(name: params[:dept], lang_id: params[:lang])
  end
end
