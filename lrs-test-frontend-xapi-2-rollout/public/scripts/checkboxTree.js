'use strict';

(function(exports)
{
	function syncChecks()

	{
		var isChecked = $(this).is(':checked');
		var treeParent = $(this).parent();

		if ($(this).parent().is("summary.tree-item-check")){
			treeParent = $(this).parent().siblings();
		}

		$('input[type=checkbox]', treeParent).prop({checked: isChecked});

		var ancestor = $(this).parent().parent();
		while(ancestor.is('.tree-item'))
		{
			if (!isChecked){
				$('> summary input[type=checkbox]', ancestor).prop({checked: isChecked});
			}

			ancestor = ancestor.parent();
		}
	}

	function getResults(form)
	{
		console.log("test",form);
	}

	$('.tree-item input[type=checkbox]').click(syncChecks);

	exports.syncChecks = syncChecks;
	exports.getResults = getResults;


})(window.CheckboxTree = window.CheckboxTree || {});
