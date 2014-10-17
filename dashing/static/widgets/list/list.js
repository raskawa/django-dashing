/*global Dashboard, $*/
Dashboard.widgets.List = function (dashboard) {
    var self = this,
        widget;
    this.__init__ = function () {
        self.html = $('#templates').find('.widget-list').clone();
        widget = dashboard.grid.add_widget(
            self.html,
            self.col,
            self.row,
            self.colPosition,
            self.rowPosition);
    };
    this.row = 2;
    this.col = 1;
    this.rowPosition = 1;
    this.colPosition = 1;
    this.color = '#12b0c5';

    this.render = function () {
        var list = self.getWidget(),
            content = '';
        
        if (self.data.data) {
            for (var i=0; i < self.data.data.length; i++) {
                for (var key in self.data.data[i]) {
                    content += '<li><span class="label">' +
                                key + '</span><span class="value">' +
                                self.data.data[i][key] + '</span></li>';
                }
            }
        }

        self.html.css('background-color', self.color);
        list.find('ul').html(content);
        list.find('.title').text(self.data.title);
        list.find('.more-info').text(self.data.more_info);
        list.find('.updated-at').text(self.data.updated_at);
    };
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {};
    this.interval = 10000;
};
