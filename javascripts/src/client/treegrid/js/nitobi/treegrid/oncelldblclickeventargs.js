/*
 * Nitobi Complete UI 1.0
 * Copyright(c) 2008, Nitobi
 * support@nitobi.com
 * 
 * http://www.nitobi.com/license
 */
nitobi.lang.defineNs('nitobi.treegrid');

/**
 * Constructs a OnCellDblClickEventArgs object.
 * @class When you subscribe to Grid events through the declaration, you
 * can optionally pass information about the event to the function
 * registered to handle it.  You do this by using the eventArgs keyword.
 * Is fired when a Cell is double clicked.
 * <p>
 * <b>Example</b>
 * </p>
 * <div class="code">
 * <pre><code class="html">
 * &lt;ntb:grid id="grid1" mode="livescrolling" oncelldblclickevent="clickHandler(eventArgs)"&gt;&lt;/ntb:grid&gt;
 * </code></pre>
 * </div>
 * <p>
 * The handler function might look like this:
 * </p>
 * <div class="code">
 * <pre><code class="javascript">
 * &#102;unction clickHandler(event)
 * {
 * 	var cell = event.getCell();
 * 	cell.getDomNode().style.backgroundColor = "red";
 * }
 * </code></pre>
 * </div>
 * @constructor
 * @param {nitobi.treegrid} source The object which is firing the event.
 * @param {nitobi.treegrid.Cell} cell The Cell object of the cell that was clicked.
 * @extends nitobi.treegrid.CellEventArgs
 * @private
 */
nitobi.treegrid.OnCellDblClickEventArgs = function(source, cell)
{
	nitobi.treegrid.OnCellDblClickEventArgs.baseConstructor.call(this, source, cell);
}

nitobi.lang.extend(nitobi.treegrid.OnCellDblClickEventArgs, nitobi.treegrid.CellEventArgs);