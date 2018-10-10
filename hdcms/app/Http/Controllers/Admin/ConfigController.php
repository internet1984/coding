<?php

namespace App\Http\Controllers\Admin;

use App\Models\Config;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ConfigController extends Controller
{
    public function edit($name)
    {
        $config = Config::firstOrNew(['name' => $name]);
        return view('config.' . $name, compact('config'));
    }

    public function update($name, Request $request)
    {
        Config::updateOrCreate(['name' => $name], ['name' => $name, 'data' => $request->all()]);
        hd_edit_env($request->all());
        return back()->with('success', '配置项保存成功');
    }
}