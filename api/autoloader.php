<?
foreach (glob("routes/*.php") as $filename)
{
    require $filename;
}
