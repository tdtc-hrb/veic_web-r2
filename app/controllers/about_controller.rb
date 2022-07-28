class AboutController < ApplicationController
  def profile
    @profiles = Article.find_by_sql(["select * from articles where type_id = ? and lang_id = ?", 1003, 4136])
  end

  def innovations
    @certificates = Qualification
      .select("qualifications.id, qualifications.name, images.name AS imgName")
      .joins("JOIN images ON qualifications.img_id = images.id")
      .where("qualifications.flag = 0 AND qualifications.lang_id = 4136")
    render 'about/images'
  end

  def qualifications
    @certificates = Qualification
            .joins("JOIN images ON qualifications.img_id = images.id")
            .where("qualifications.flag = 1 AND qualifications.lang_id = 4136")
            .select("qualifications.id, qualifications.name, images.name AS imgName")
    render 'about/images'
  end
end
