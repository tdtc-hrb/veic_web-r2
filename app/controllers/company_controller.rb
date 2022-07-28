class CompanyController < ApplicationController
  def index
  end

  def news
    @propagandas = Article.find_by_sql(["select * from articles where type_id = ? and lang_id = ?", 1001, 4136])
  end

  def notices
    @articles = Article.find_by_sql(["select * from articles where type_id = ? and lang_id = ?", 1002, 4136])
  end
end
