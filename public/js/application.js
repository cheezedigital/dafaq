$('embed').mediaelementplayer({
  success: function(media, node, player) {
    $('#' + node.id + '-mode').html('mode: ' + media.pluginType);
  }
});
