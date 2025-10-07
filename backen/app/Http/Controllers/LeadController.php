<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Lead::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'required|string',
            'email' => 'required|email',
            'telefone' => 'required|string',
            'kit_interesse' => 'required|in:1,3,5',
        ]);

        $lead = Lead::create($validated);

        return response()->json($lead, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $lead = Lead::findOrFail($id);
        return $lead;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $lead = Lead::findOrFail($id);

        $validated = $request->validate([
            'nome' => 'sometimes|required|string',
            'email' => 'sometimes|required|email',
            'telefone' => 'sometimes|required|string',
            'kit_interesse' => 'sometimes|required|in:1,3,5',
        ]);

        $lead->update($validated);

        return response()->json($lead);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $lead = Lead::findOrFail($id);
        $lead->delete();

        return response()->json(null, 204);
    }
}
